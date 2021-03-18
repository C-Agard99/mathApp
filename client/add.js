Template.addNum.onCreated(function addNumOnCreated(){
    this.num1 = new ReactiveVar(0);
    this.num2 = new ReactiveVar(0);
    });
    
    Template.addNum.helpers({
        num1(){
            return Template.instance().num1.get();
        },
        num2(){
            return Template.instance().num2.get();
        },
        ans(){
            return Template.instance().num1.get() + Template.instance().num2.get();
        }
    });
    
    Template.addNum.events({
        'click #js-adding'(event, instance) {
            instance.num1.set(parseInt(document.querySelector("#n1a").value));
            instance.num2.set(parseInt(document.querySelector("#n2a").value));
        }
    });