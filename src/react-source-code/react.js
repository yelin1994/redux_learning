import { Component } from "react"

(function(global) { // 类比于
    /**
     *  所有组件的基类
     */
    
     class Component {
        static(partialState) {
            this.state = {
                ...this.state,
                ...partialState
            };
            // 从当前开始更新组件树
            //
        }
     }

     const createNode = (type, props, children) => {
        if (children) {
            props.children = children;
        }
        return {
            type: type,
            props: props,
        }
    }
     /**
      *  创建一个vdom的方法
      * @param {*} type 
      * @param {*} props 
      * @param {*} children 
      */
    const createElement = function (type, props, children) {
        return createNode(type, props, children)
    }

    global.React = {
        createElement,
        Component,
    }
})(window)