import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchComponentComponent } from 'src/app/common/search-component/search-component.component';
import { Iuser } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  standalone: true,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule, SearchComponentComponent, HttpClientModule],
})
export class UserComponent {
  users: Iuser[] = [];
  filteredUsers: Iuser[] = [];
  subscription = new Subscription();

  constructor(private userservice: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUsers(): void {
    this.subscription.add(
      this.userservice.getusers().subscribe({
        next: (res) => {
          this.users = res;
          this.filteredUsers = this.users;
        },
      })
    );
  }

  search(searchTerm: string) {
    this.filteredUsers = this.users.filter((user: any) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
