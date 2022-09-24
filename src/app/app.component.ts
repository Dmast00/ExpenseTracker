import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from './Services/service.service';
import { TransactionModel } from './transaction-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExpenseTracker';
  transactions : TransactionModel[] = []; 
  form : FormGroup;
  /**
   *
   */
  constructor(private service : ServiceService,public fb : FormBuilder) {
    this.form = new FormGroup({
      transactionName: new FormControl('',[]),
      transactionDescription : new FormControl('',[]),
      transactionAmount : new FormControl('',[]),
      transactionDate : new FormControl('',[])
    })
  }
  ngOnInit(): void {
    this.getTransactions();
  }

  get f(){
    return this.form.controls;
  }
  getTransactions(){
    this.service.getTransaction().subscribe(data =>{
      this.transactions = data
      console.log(data)
    })
  }

  postTransaction(){
    this.service.postTransaction(this.form.value).subscribe(data =>{
      console.log(data)
      this.ngOnInit();
      this.form.reset()
    })
  }

}
