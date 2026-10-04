import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { PageMetaService } from '../../core/services/page-meta.service';

@Component({ selector: 'app-contact', standalone: true, imports: [RouterLink], templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss' })
export class ContactComponent { constructor(readonly whatsapp: WhatsAppService, meta: PageMetaService) { meta.update('Visit Us | The Friendz Fashion Point', 'Find The Friendz Fashion Point at Shop No. 13, Nilkanth Shopping Center, Nava Road, Khalal.'); } }
