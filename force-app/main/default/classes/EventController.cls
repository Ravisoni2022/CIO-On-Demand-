public with sharing class EventController 
{
    @AuraEnabled(cacheable=true)
    public static List<Event> getEvents()
    {
        return [SELECT Status__c FROM Event];
        
    }
}
