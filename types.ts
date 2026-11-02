export type Platform = "Meta"|"Google"|"TikTok"|"LinkedIn"|"Pinterest"|"Manual";
export type Campaign = {id:string; name:string; platform:Platform; status:"Active"|"Paused"|"Completed"; spend:number; revenue:number; impressions:number; clicks:number; conversions:number; date:string};
export type Sale = {id:string; orderId:string; product:string; revenue:number; refund:number; source:string; date:string};
export type Expense = {id:string; label:string; amount:number; date:string; category:"Product cost"|"Shipping"|"Processing fee"|"Other"};
export type AppSettings = {currency:string; timezone:string; theme:"light"|"dark"; alerts:boolean; spendThreshold:number; roasThreshold:number; backendUrl:string};
export type AppData = {campaigns:Campaign[]; sales:Sale[]; expenses:Expense[]; settings:AppSettings; demoMode:boolean};
export type Range = "Today"|"Yesterday"|"Last 7 Days"|"Last 30 Days"|"Last 90 Days"|"All time";
