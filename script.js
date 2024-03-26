function beforeSubmit(){
    let setLeadDate = document.querySelector(".setLeadDate");
    let inputLeadDate = document.querySelector(".inputLeadDate");
    console.log(inputLeadDate.value);

    let formattedDate = new Date(inputLeadDate.value).toLocaleDateString("en-US");
    setLeadDate.value = formattedDate;
}