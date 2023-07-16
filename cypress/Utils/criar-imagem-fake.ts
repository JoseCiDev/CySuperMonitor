/// <reference types="Cypress" />
// @ts-check
///<reference path="../support/cypress.d.ts" />

// import Database from './Database/database';
import { ELEMENTS as el } from '../integration/Login/elements';
import * as mysql from 'mysql';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';
dotenv.config();

export const criarImagemFake = (name: string, size: number) => {
  // Generate a random image URL using the faker library
  const imageUrl = faker.image.url();

  // Convert the image URL to a base64 string
  const base64String = imageUrl.split(',')[1];

  // Create a Blob object from the base64 string
  const blob = Cypress.Blob.base64StringToBlob(base64String, 'image/jpeg');

  // Write the Blob object to a file
  cy.writeFile(`fixtures/${name}.jpeg`, blob, 'binary');
};