Template.multNum.onCreated(function multNumOnCreated(){
    this.num1 = new ReactiveVar(0);
    this.num2 = new ReactiveVar(0);
    });
        
        Template.multNum.helpers({
            num1(){
                return Template.instance().num1.get();
            },
            num2(){
                return Template.instance().num2.get();
            },
            ans(){
                return Template.instance().num1.get() * Template.instance().num2.get();
            }
        });
        
        Template.multNum.events({
            'click #js-multing'(event, instance) {
                instance.num1.set(parseInt(document.querySelector("#n1m").value));
                instance.num2.set(parseInt(document.querySelector("#n2m").value));
            }
        });