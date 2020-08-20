import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  apiUrl: string = 'http://api.magicorp.fr/magicorp/v1';
  domain: string = ".magicorp.fr"; // TODO: change to .magicorp.fr
}