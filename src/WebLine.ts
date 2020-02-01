import {WebNode} from "./WebNode";

export class WebLine {
    public left: WebNode;
    public right: WebNode;

    constructor(left: WebNode, right: WebNode) {
        this.left = left;
        this.right = right;
    }
}