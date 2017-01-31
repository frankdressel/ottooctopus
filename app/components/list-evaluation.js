import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        evaluate(){
            let machine=this.get('machine').get('machine');
            this.get('machine').set('listValues', this.get('listValues'));
            this.set('output', machine.evaluateScript());
        },
        setFilter(attribute){
            let val=arguments[1];
            if(String(arguments[1]).length==0){
                val=null;
            }
            this.get('machine').get('machine').set(attribute+'_filter', val);
        },
        plus(index, evt){
            let newValues=this.get('listValues');

            let MachineValues=Ember.Object.extend();
            this.get('attributes').forEach(attr=>{
                let newObj={};
                newObj[attr]=null;
                MachineValues.reopen(newObj);
            });
            let newVal=MachineValues.create();
            this.get('attributes').forEach(attr=>{
                newVal.set(attr, '');
            });
            newValues.insertAt(index, newVal);
        },
        minus(index, evt){
            let newValues=this.get('listValues');
            newValues.removeAt(index);
            this.set('listValues', newValues);
        },
        up(index, evt){
            let newValues=this.get('listValues');
            let removedValue=newValues[index];
            newValues.removeAt(index, 1);
            newValues.insertAt(index-1, removedValue);
            this.set('listValues', newValues);
        },
        down(index, evt){
            let newValues=this.get('listValues');
            let removedValue=newValues[index];
            newValues.removeAt(index, 1);
            newValues.insertAt(index+1, removedValue);
            this.set('listValues', newValues);
        }
    }
});
