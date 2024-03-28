---
title: FlexBox相關
authors: ttom
tags: [FlexBox]
---
來記錄一些有關FlexBox的note
<!--truncate-->

flexbox的屬性
------
首先來看看Container、Items各自有哪些屬性：

> Container：
> 
> -   Display:
      首先先宣告為`flex`它才能使用。
        ```css
        display:flex;
        ```
> -   Flex-direction:
        ```css
        flex-direction: row; /*預設，主軸由左至右*/
        flex-direction: row-reverse; /*主軸由右至左*/
        flex-direction: column; /*主軸由上至下*/
        flex-direction: column-reverse; /*主軸由下至上*/
        ```      
> -   Flex-wrap
        ```css
        flex-wrap: nowrap; /*預設，單行排列，不包起來*/
        flex-wrap: wrap; /*包好包滿*/
        flex-wrap: wrap-reverse; /*包好包滿外還要來個反轉*/
        ```
> -   Flex-flow:
      那麼這個屬性又是幹嘛的呢？？其實你也可以不用懂它，它就是`Flex-direction`、`Flex-wrap`的「組合技」，如此一來就可以共同定義主副軸的排列方式了。
        ```css
        flex-flow: {flex-direction} {flex-wrap}; /*大括號裡面放的就是它們各自的屬性*/
        ```

> -   Justify-content:定義了「主軸」的「對齊方式」，有以下5種方式：
        ```css
        justify-content: flex-start; /*預設，靠頭對齊*/
        justify-content: flex-end; /*靠尾對齊*/
        justify-content: center; /*置中對齊*/
        justify-content: space-between; /*置中對齊，頭尾的items貼齊Container，items之間有固定距離*/
        justify-content: space-around; /*置中對齊，頭尾的items沒有貼齊Container，items之間、頭尾items跟Container之間皆有固定距離*/
        justify-content: space-evenly; /*置中對齊，頭尾的items沒有貼齊Container，items之間、頭尾items跟Container之間距離相同*/
        ```          
> -   Align-items:定義了「副軸」的「對其方式」，有以下5種方式：
        ```css
        align-items: flex-start; /*預設，靠頭對齊*/
        align-items: flex-end; /*靠尾對齊*/
        align-items: center; /*置中對齊*/
        align-items: baseline; /*按照文本基線對齊*/
        align-items: stretch; /*items延展至Container的頭尾*/
        ```
> -   Align-content:這個屬性是`Align-items`的進階版，而且它跟`Justify-content`長得有八成像，所以他們能控制的東西也是一樣差不多～這裡再再提醒一次：`Justify-content`控制主軸；`Align-content`控制副軸喔。
    ```css
    align-content: flex-start; /*靠頭對齊*/
    align-content: flex-end; /*靠尾對齊*/
    align-content: center; /*置中對齊*/
    align-content: space-between; /*置中對齊，頭尾的items貼齊Container，items之間有固定距離*/
    align-content: space-around; /*置中對齊，頭尾的items沒有貼齊Container，items之間、頭尾items跟Container之間皆有固定距離*/
    align-content: stretch; /*預設 items延展至Container的頭尾*/
    ```
> 
> Items：
>   Items也是有很多東西可以控制的，它能做到的事情主要是items跟items之間的關係，像是誰在前誰在後的`order`，又或是誰位置可以比較大誰位置可以比較小的`Flex-grow`跟`Flex-shrink`等等。有些屬性甚至能覆蓋掉Container的屬性呢
> -   Order:屬性可以控制誰在前誰在後，即使在HTML上的物件是在最後一個，只要下達這個指令就可以輕輕鬆鬆要它在哪它就在哪囉。**order預設為零，若要排在0前面的話也可以負值喔**
    ```css
    order: integer; /*預設為0，integer的地方是給整數*/
    ```
> -   Flex-basis:它決定了主軸上items的預設長度。以`row`當主軸來說它控制items的「寬度」；以`column`當主軸來說它控制items的「高度」
    ```css
    flex-basis: auto; /*預設為auto，可以給長度各種單位*/
    ```
> -   Flex-grow:這個屬性跟等一下講的屬性是相關的，可以將他們視為兄弟。`Flex-grow`屬性決定items如何分配剩餘空間。
    ```csss
    flex-grow: 0;/*預設為0*/
    ```
> -   Flex-shrink:剛剛的`Flex-grow`是處理當Container有剩餘空間時，將items「伸展」來符合Container的長度；現在`Flex-shrink`則是處理當Container不夠items塞時，將items「縮小」來符合Container的長度。
    ```caa
    flex-shrink: 0;/*預設為0*/
    ```
> -   Align-self:這個屬性可以調整「副軸」的對齊屬性，再重申一次，是「副軸」喔不是主軸。它與`Align-items`、`Align-content`一樣可以控制副軸的排列方式，它卻能更進一步個別調整單一item的排列方式，以下是它的語法：
    ```css
    align-self: auto; /*預設，與Container的align-items一樣*/
    align-self: flex-start; /*預設，靠頭對齊*/
    align-self: flex-end; /*靠尾對齊*/
    align-self: center; /*置中對齊*/
    align-self: baseline; /*按照文本基線對齊*/
    align-self: stretch; /*items延展至Container的頭尾*/
    ```
    **特別注意！`Align-self`給定的值是會壓過`Align-items`、`Align-content`的喔**

### 在交叉軸上分配多餘空間：`align-content`

`align-content` 用來定義如何分配交叉軸上多行之間的多餘空間，也就是說 align-content 只在 flex 子元素的排列在 flex 容器中「不只一行的時候」有作用，如果我們的子元素都在同一行上，當然就沒有怎麼分配「多行之間的剩餘空間」的問題。

`align-content: stretch` align-content 的預設值是 stretch，也就是每行自動在交叉軸上延展並填滿容器：

###### 參考資料
教學FLEXBOX
https://jameshsu0407.github.io/blog/20200925_flexbox/

CSS Flex & Grid 排版詳解（上）：What the Flex?
https://nicolakacha.coderbridge.io/2020/09/20/css-flex-grid-1/