// TODO: add fields
import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class UserData {
    _favorites: string[] = [];
    HAS_LOGGED_IN = 'hasLoggedIn';
    HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    constructor(
        public events: Events,
        public storage: Storage
    ) { }

    hasFavorite(sessionName: string): boolean {
      return (this._favorites.indexOf(sessionName) > -1);
    }
    
    addFavorite(sessionName: string): void {
      this._favorites.push(sessionName);
    }
    
    removeFavorite(sessionName: string): void {
      const index = this._favorites.indexOf(sessionName);
      if (index > -1) {
        this._favorites.splice(index, 1);
      }
    }

    async login(username: string): Promise<any> {
      await this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        return this.events.publish('user:login');
    }

    async signup(username: string): Promise<any> {
      await this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        return this.events.publish('user:signup');
    }
    
    async logout(): Promise<any> {
      await this.storage.remove(this.HAS_LOGGED_IN);
        await this.storage.remove('username');
        this.events.publish('user:logout');
    }

    setUsername(username: string): Promise<any> {
      return this.storage.set('username', username);
    }
      
    async getUsername(): Promise<string> {
      const value = await this.storage.get('username');
        return value;
    }
    async isLoggedIn(): Promise<boolean> {
      const value = await this.storage.get(this.HAS_LOGGED_IN);
      return value === true;
    }
  
    async checkHasSeenTutorial(): Promise<string> {
      const value = await this.storage.get(this.HAS_SEEN_TUTORIAL);
      return value;
    }
}