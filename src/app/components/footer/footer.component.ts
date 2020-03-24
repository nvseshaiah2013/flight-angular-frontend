import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt,faPhoneAlt,faEnvelopeOpen,faCopyright, faHeart, faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelopeOpen = faEnvelopeOpen;
  faCopyright = faCopyright;
  faHeart = faHeart;
  faAt = faAt;
  constructor() { }

  ngOnInit() {
  }

}
