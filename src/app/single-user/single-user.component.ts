import { Component, OnInit } from '@angular/core';
import {Person} from "../models/person";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../Technical/constants/resolver-response.constants";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  public singleUser: Person | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.singleUser = response[ResolverResponse.singleUser];
    })
  }

}
