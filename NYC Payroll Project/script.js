let data, info, output;


async function init(){  
  let link = "Payroll.json";
  info = await fetch(link);
  data = await info.json();
 
  let output = document.getElementById("output");
  let build = "";


  for(let i = 0; i < data.length; i+=1){
    let payroll = data[i];
    build += `<div class="fitted card">
                 <h3>Base Salary: ${payroll.base_salary}</h3>
                 <p>Work Location Borough: ${payroll.work_location_borough}</p>
                 <p>Agency Name: ${payroll.agency_name}</p>
                 <p>Title Description: ${payroll.title_description}</p>
                 <p>Fiscal Year: ${payroll.fiscal_year}</p>
                 <p>Total Other Pay: ${payroll.total_other_pay}<p>
              </div>`;    
  }
  output.innerHTML = build;
}
async function initB(){
  let link = "Payroll.json";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function filterBybase_salary(){
  let output = document.getElementById("output");
  let base_salary = document.getElementById("basesalary").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let payroll = data[i];
    if(payroll.base_salary == base_salary){
      build += `<div class="fitted card">
                    <h3>Base Salary: ${payroll.base_salary}</h3>
                    <p>Work Location Borough: ${payroll.work_location_borough}</p>
                    <p>Agency Name: ${payroll.agency_name}</p>
                    <p>Title Description: ${payroll.title_description}</p>
                    <p>Fiscal Year: ${payroll.fiscal_year}</p>
                    <p>Total Other Pay: ${payroll.total_other_pay}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterBywork_location_borough(){
  let output = document.getElementById("output");
  let work_location_borough = document.getElementById("worklocationborough").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let payroll = data[i];
    if(payroll.work_location_borough == work_location_borough){
      build += `<div class="fitted card">
                    <h3>Base Salary: ${payroll.base_salary}</h3>
                    <p>Work Location Borough: ${payroll.work_location_borough}</p>
                    <p>Agency Name: ${payroll.agency_name}</p>
                    <p>Title Description: ${payroll.title_description}</p>
                    <p>Fiscal Year: ${payroll.fiscal_year}</p>
                    <p>Total Other Pay: ${payroll.total_other_pay}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterByagency_name(){
  let output = document.getElementById("output");
  let agency_name = document.getElementById("agencyname").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let payroll = data[i];
    if(payroll.agency_name == agency_name){
      build += `<div class="fitted card">
                    <h3>Base Salary: ${payroll.base_salary}</h3>
                    <p>Work Location Borough: ${payroll.work_location_borough}</p>
                    <p>Agency Name: ${payroll.agency_name}</p>
                    <p>Title Description: ${payroll.title_description}</p>
                    <p>Fiscal Year: ${payroll.fiscal_year}</p>
                    <p>Total Other Pay: ${payroll.total_other_pay}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterbytitledescription(){
  let output = document.getElementById("output");
  let title_description = document.getElementById("titledescription").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let payroll = data[i];
    if(payroll.title_description == title_description){
      build += `<div class="fitted card">
                    <h3>Base Salary: ${payroll.base_salary}</h3>
                    <p>Work Location Borough: ${payroll.work_location_borough}</p>
                    <p>Agency Name: ${payroll.agency_name}</p>
                    <p>Title Description: ${payroll.title_description}</p>
                    <p>Fiscal Year: ${payroll.fiscal_year}</p>
                    <p>Total Other Pay: ${payroll.total_other_pay}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterByfiscalyear(){
  let output = document.getElementById("output");
  let fiscal_year = document.getElementById("fiscalyear").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let payroll = data[i];
    if(payroll.fiscal_year == fiscal_year){
      build += `<div class="fitted card">
                    <h3>Base Salary: ${payroll.base_salary}</h3>
                    <p>Work Location Borough: ${payroll.work_location_borough}</p>
                    <p>Agency Name: ${payroll.agency_name}</p>
                    <p>Title Description: ${payroll.title_description}</p>
                    <p>Fiscal Year: ${payroll.fiscal_year}</p>
                    <p>Total Other Pay: ${payroll.total_other_pay}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterBytotalotherpay(){
  let output = document.getElementById("output");
  let total_other_pay = document.getElementById("otherpay").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let payroll = data[i];
    if(payroll.total_other_pay == total_other_pay){
      build += `<div class="fitted card">
                    <h3>Base Salary: ${payroll.base_salary}</h3>
                    <p>Work Location Borough: ${payroll.work_location_borough}</p>
                    <p>Agency Name: ${payroll.agency_name}</p>
                    <p>Title Description: ${payroll.title_description}</p>
                    <p>Fiscal Year: ${payroll.fiscal_year}</p>
                    <p>Total Other Pay: ${payroll.total_other_pay}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function payrollByBorough(){

  let q = 0, bk = 0, bx = 0, m = 0, si = 0;


  for(let i = 0; i < data.length; i++){
    let payroll = data[i];
    if(payroll.Work_location_Borough == "QUEENS"){
      q++;
    }else if(payroll.Work_location_Borough == "MANHATTAN"){
      m++;
    }else if(payroll.Work_location_Borough == "BROOKLYN"){
      bk++;
    }else if(payroll.Work_location_Borough == "BRONX"){
      bx++;
    }else{
      si++;
    }
  }

  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", si]
  ];


  let chartType = get("chartType").value;  
  
  displayChart(chartData,"chart",chartType)
}
