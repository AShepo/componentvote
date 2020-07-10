<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->createFrame()->begin("Загрузка навигации");
?>

<?if($arResult["NavPageCount"] > 1):?>

    <?if ($arResult["NavPageNomer"]+1 <= $arResult["nEndPage"]):?>
        <?
        $plus = $arResult["NavPageNomer"]+1;
        $url = $arResult["sUrlPathParams"] . "PAGEN_".$arResult["NavNum"]."=".$plus;

        ?>
	<div class="pagination_wrap">
        <a class="load_more" href="<?=$url?>">
            Показать еще
        </a>
	</div>
	


    <?else:?>

        <div class="load_more">
            Загружено все
        </div>

    <?endif?>

<?endif?>