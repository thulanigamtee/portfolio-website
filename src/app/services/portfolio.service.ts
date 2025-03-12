import { Injectable } from '@angular/core';
import { Client, Databases, Storage } from 'appwrite';
import { environment } from '../../environments/environment';
import { project } from '../components/layout/portfolio/project.model';
@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private client: Client;
  private database: Databases;
  private storage: Storage;

  constructor() {
    this.client = new Client()
      .setEndpoint(environment.appwrite.endpoint)
      .setProject(environment.appwrite.projectId);

    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async getProjects(): Promise<project[]> {
    try {
      const response = await this.database.listDocuments(
        environment.appwrite.databaseId,
        environment.appwrite.collectionId
      );

      return response.documents.map((doc: any) => ({
        image: this.getFilePreview(doc.image),
        name: doc.name,
        description: doc.description,
        technologies: doc.technologies,
        site: doc.site,
        repository: doc.repository,
      }));
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  }

  getFilePreview(fileId: string) {
    return this.storage.getFileView(environment.appwrite.buckedId, fileId);
  }
}
