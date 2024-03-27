---

title: ubuntu的vpn連線
authors: ttom
tags: [ubuntu, vpn]
---

在ubuntu下來建立VPN,注意未成功
<!--truncate-->
因為公司的客戶使VPN來連線，所以在jenins的主機也要來設定一下，可以直接連線來更新web的code和服務器上的code
# L2TP/Ipsec連線
目前客戶是使用l2tp來連線，所來首先以windown內建一vpn來連線測試連線是否正常
安裝套件
------
```bash
sudo apt-get update
sudo apt-get install xl2tpd
sudo apt-get install strongswan
```
Configure StrongSwan
------
編輯 ipsec.conf:
```bash
sudo vim /etc/ipsec.conf
```
追加內容在後面,將n.n.n.n是VPN server的IP
```conf

conn %default
    ikelifetime=60m
    keylife=20m
    rekeymargin=3m
    keyingtries=1
    keyexchange=ikev1
    authby=secret
    ike=aes128-sha1-modp1024,3des-sha1-modp1024!
    esp=aes128-sha1-modp1024,3des-sha1-modp1024!

conn L2TP-PSK
    keyexchange=ikev1
    left=%defaultroute
    auto=add
    authby=secret
    type=transport
    leftprotoport=17/1701
    rightprotoport=17/1701
    # set this to the ip address of your vpn server
    right=n.n.n.n



```

編輯這檔案是放金鑰的地方 ipsec.secrets:
```bash
sudo vim /etc/ipsec.secrets
```
放在`your_pre_shared_key`的放金鑰的地方
```
: PSK "your_pre_shared_key"
```

設定xl2tpd
------
```
sudo vim /etc/xl2tpd/xl2tpd.conf
```
追加以下的內容，將n.n.n.n用你的VPN server IP的代替

```
[lac cpcVPN]
; set this to the ip address of your vpn server
lns = n.n.n.n
ppp debug = yes
pppoptfile = /etc/ppp/options.l2tpd.client
length bit = yes

```

編輯 options.l2tpd.client:
---------
```
sudo vim /etc/ppp/options.l2tpd.client

```
加入下列的內容將`your_user_name`和 `your_password`代替
```
ipcp-accept-local
ipcp-accept-remote
refuse-eap
require-mschap-v2
noccp
noauth
logfile /var/log/xl2tpd.log
idle 1800
mtu 1410
mru 1410
defaultroute
usepeerdns
debug
connect-delay 5000
name your_user_name
password your_password

```

連線
-------
每次連線時要執行下列的命令
```bash
sudo mkdir -p /var/run/xl2tpd
sudo touch /var/run/xl2tpd/l2tp-control
sudo service strongswan-starter restart
sudo service xl2tpd restart
sudo service ipsec restart
sleep 8
sudo ipsec up L2TP-PSK
sleep 8
sudo bash -c 'echo "c cpcVPN" > /var/run/xl2tpd/l2tp-control'
sleep 8
ifconfig
```
檢查輸出是否有interface ppp0，有的話下一步才能進行

Route
------
將vpn的IP加入rout表裏,將`x.x.x.x`
```bash
sudo ip route add x.x.x.x via $(ip address show dev ppp0 | grep -Po '(?<=peer )(\b([0-9]{1,3}\.){3}[0-9]{1,3}\b)') dev ppp0

```

斷線
------
```bash
sudo bash -c 'echo "d cpcVPN" > /var/run/xl2tpd/l2tp-control'
ipsec down L2TP-PSK
```

Debugging
------
Check the logs:

```
dmesg | less /var/log/xl2tpd.log

```

###### 參考文件
https://github.com/feng-zh/docker-ipsec-vpn-client?tab=readme-ov-file
https://github.com/emmdim/docker-ipsec-vpn-client?tab=readme-ov-file
https://github.com/r0hm1/l2tp-vpn-client