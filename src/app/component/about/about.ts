import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  
    private route: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit() {

      const id = this.route.snapshot.paramMap.get('id'); 
      console.log(id);

      this.route.params.subscribe({
        next: (data) => {
          console.log('About component initialized with id:', data['id']);
        },
        error: (err) => {
          console.error('Error fetching route params:', err);
        }
      });
      
        // this.route.params.subscribe(params => {
        //     console.log('About component initialized with id:', params['id']);
        // });
    }
}
