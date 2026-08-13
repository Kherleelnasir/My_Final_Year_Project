import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminLayout } from '../../../layouts/admin-layout/admin-layout';

@Component({
  selector: 'app-crime-types',
  standalone: true,
  imports: [AdminLayout, FormsModule],
  templateUrl: './crime-type.html',
  styleUrl: './crime-type.css'
})
export class CrimeTypes {

  searchText = '';

  crimeTypes = [
    {
      id: 'CT-001',
      name: 'Theft',
      description: 'Unlawful taking of another person’s property.',
      cases: 48,
      status: 'Active'
    },
    {
      id: 'CT-002',
      name: 'Assault',
      description: 'Physical attack or threat of physical harm.',
      cases: 32,
      status: 'Active'
    },
    {
      id: 'CT-003',
      name: 'Robbery',
      description: 'Taking property from a person using force or threats.',
      cases: 27,
      status: 'Active'
    },
    {
      id: 'CT-004',
      name: 'Burglary',
      description: 'Illegal entry into a building with intent to commit a crime.',
      cases: 21,
      status: 'Active'
    },
    {
      id: 'CT-005',
      name: 'Vehicle Theft',
      description: 'Unauthorized taking or stealing of a motor vehicle.',
      cases: 18,
      status: 'Active'
    },
    {
      id: 'CT-006',
      name: 'Cybercrime',
      description: 'Criminal activities involving computers or digital systems.',
      cases: 15,
      status: 'Active'
    },
    {
      id: 'CT-007',
      name: 'Vandalism',
      description: 'Intentional damage or destruction of property.',
      cases: 11,
      status: 'Active'
    },
    {
      id: 'CT-008',
      name: 'Fraud',
      description: 'Deception used to obtain money, property, or advantage.',
      cases: 9,
      status: 'Inactive'
    }
  ];

  get filteredCrimeTypes() {

    const search = this.searchText.toLowerCase().trim();

    if (!search) {
      return this.crimeTypes;
    }

    return this.crimeTypes.filter(crime =>
      crime.name.toLowerCase().includes(search) ||
      crime.id.toLowerCase().includes(search) ||
      crime.description.toLowerCase().includes(search)
    );
  }

  addCrimeType(): void {
    console.log('Add crime type');
  }

  editCrimeType(crime: any): void {
    console.log('Edit crime type:', crime);
  }

  changeStatus(crime: any): void {
    crime.status =
      crime.status === 'Active'
        ? 'Inactive'
        : 'Active';
  }

}