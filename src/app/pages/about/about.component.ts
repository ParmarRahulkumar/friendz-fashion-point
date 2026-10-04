import { Component } from '@angular/core';
import { PageMetaService } from '../../core/services/page-meta.service';

@Component({ selector: 'app-about', standalone: true, imports: [], templateUrl: './about.component.html',
  styleUrl: './about.component.scss' })
export class AboutComponent { constructor(meta: PageMetaService) { meta.update('Our Story | The Friendz Fashion Point', 'Meet The Friendz Fashion Point, a local menswear store owned by Mehul Parmar and Gaurav Parmar in Khalal.'); } }
