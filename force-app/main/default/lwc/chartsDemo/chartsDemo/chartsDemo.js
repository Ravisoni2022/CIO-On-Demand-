import { LightningElement, wire } from 'lwc';
import getEvents from '@salesforce/apex/EventController.getEvents'
export default class ChartsDemo extends LightningElement {
    pieChartLabels=[]
    pieChartData=[]
    @wire(getEvents)
    EventHandler({data, error}){
        if(data){
            console.log(data)
            const result = data.reduce((json, val)=>({...json, [val.Status__c]:(json[val.Status__c]|0)+1}), {})
            if(Object.keys(result).length){
                this.pieChartLabels = Object.keys(result)
                this.pieChartData = Object.values(result)
            }
        
        }
        if(error){
            console.error(error)
        }
    }
}