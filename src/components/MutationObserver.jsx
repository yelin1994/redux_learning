import React from 'react'

export class MutationOb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            name: 'hello'
        }
        this.mutationCallback = this.mutationCallback.bind(this)
        this.observer = new MutationObserver(this.mutationCallback)
        this.handleAddNephew = this.handleAddNephew.bind(this);
        this.handleAddChild = this.handleAddChild.bind(this);
    }

    mutationCallback (MutationRecordList, observer) {
        const target = document.querySelector('#mutationTest');
        // this.handleAddNephew();
        console.log(observer === this.observer)
    }

    componentDidMount() {
        const target = document.querySelector('#mutationTest');
        const optionConfig = {
            childList: true,
            subtree: true,
            // attributes: true,
            // characterData: true,
            // attributeOldValue:true,
            // characterDataOldValue: true
        }
        this.observer.observe(target, optionConfig)
    }

    handleAddChild() {
        let count = 0;
        const that = this;
        return function() {
            const child = document.createElement('span')
            child.innerText = count++;
            const container = document.querySelector('#mutationTest');
            // container.appendChild(child);
            that.setState((preState) => ({
                name: preState.name +'1' 
            }))
            // console.log(container.childNodes[1].nodeType)
            // container.childNodes[1].textContent= count;
            // container.className = 'hello' + count;
        }
    }

    handleAddNephew() {
        const childItem = { name: 'hello', age: 10 }
        this.setState((preState) => {
            return {
                list: [...preState.list, childItem]
            }
        })
    }

    handleAddAttribute() {

    }

    render() {
        return (
            <div>
               <div id='mutationTest' style={{border: '1px solid', width: '400px', height: '400px'}} className='hhe'> 
                    <ul id='containerChilad'>
                        {
                            this.state.list.map((item, index) => {
                                return <li key={index}>{index}</li>
                            })
                        }
                    </ul>
                    {this.state.name}
                </div>  
                <button onClick={this.handleAddChild()}>addChild</button>
                <button onClick={this.handleAddNephew}>addNephew</button>
            </div>    
        )
    }
}