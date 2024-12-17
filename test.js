let data9 = [
    { id: 1, name: "Ali", status: "Pending" },
    { id: 2, name: "Vali", status: "Active" },
    { id: 3, name: "Sami", status: "Completed" },
  ];
  
  data9.forEach(userId => {
      if(userId.id > 1){
          userId.status = "Inactive"
      }else {
          userId.status = "Active"
      }
  })
  
  console.log(data9)