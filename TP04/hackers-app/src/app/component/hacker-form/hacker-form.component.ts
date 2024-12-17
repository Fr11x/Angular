import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Hacker } from '../../models/Hacker';
import { LookupIpService } from '../../service/lookup-ip.service';
@Component({
  selector: 'app-hacker-form',
  templateUrl: './hacker-form.component.html',
  styleUrl: './hacker-form.component.css'
})
export class HackerFormComponent {

  hacker: Hacker = new Hacker('','','','')
  hackerForm = new FormGroup({ 
  ip: new FormControl(''),
  countryName: new FormControl(''),
  regionName: new FormControl(''),
  city: new FormControl(''),
  id: new FormControl(undefined)
  })
  onSubmit() { 
  console.log("Submit")
  console.log(this.hackerForm.value)
  }
  clear() { 
  this.hackerForm.controls.ip.setValue("IP à renseigner") 
  console.log("cancel")
  console.log(this.hackerForm.value)
  }
  constructor(private lookupIpService: LookupIpService){}

  getInfoByIP() {
    console.log("Appel de Lookup")
    this.lookupIpService.getGeoLocationIp(this.hackerForm.controls.ip.getRawValue() ?? "")
    .subscribe((res: any)=>{
      this.hackerForm.controls.city.setValue(res.city);
      this.hackerForm.controls.regionName.setValue(res.region_name);
      this.hackerForm.controls.countryName.setValue(res.country_name);
  });
}
}
