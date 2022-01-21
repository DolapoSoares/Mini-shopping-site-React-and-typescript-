import { Button } from "@material-ui/core";

//Types

import { CartGoodsType } from "../App";

//Styles

import { Wrapper } from "./item.styles";

type Props = {
    item : CartGoodsType;
    addToCart : (clicked : CartGoodsType) => void;
}