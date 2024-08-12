///home/jose/projetos/CySuperMonitor/cypress/import.ts
import * as loadash from 'lodash';
export { loadash };

// import * as data from './fixtures/data.json';
// export { data };

import * as dateFns from 'date-fns';
export { dateFns };

export { faker } from '@faker-js/faker'

export { elements } from './elements'

export { format } from 'date-fns';

import { fakerBr } from '@js-brasil/fakerbr';
export { fakerBr };

export { mount } from 'cypress/react'

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
export { Given, When, Then };

import 'cypress-wait-until';

export {
    DataParameters,
    CheckAndThrowError,
    SearchRecipe,
    RecipeImport,
} from './DataParameters/Interfaces/interface';

export {
    ValidationResult,
    ElementTypeAndValueOpcional,
} from './DataParameters/Types/types';

export {
    dataParameters,
} from './DataParameters/dataParameters';

export { PatientSearchParameter } from './DataParameters/Enums/patientSearchParameter';
export { SearchOrder } from './DataParameters/Enums/searchOrder';
export { PaymentStatus } from './DataParameters/Enums/paymentStatus';
export { RecipeReceiptChannel } from './DataParameters/Enums/recipeReceiptChannel';
export { RecipeImportCluster } from './DataParameters/Enums/recipeImportCluster';
export { RecipeType } from './DataParameters/Enums/recipeType';
export { PaymentMethod } from './DataParameters/Enums/paymentMethod';
export { OrderClosingChannel } from './DataParameters/Enums/orderClosingChannel';
export { PendingsFilter } from './DataParameters/Enums/pendingsFilter';
export { RelationshipsPrescriberAttendantAndCluster } from './DataParameters/Enums/relationshipsPrescriberAttendantAndCluster';
export { Pendency } from './DataParameters/Enums/pendency';
export { TechnicalDoubtCategory } from './DataParameters/Enums/technicalDoubtCategory';
export { TechnicalDoubtStatus } from './DataParameters/Enums/technicalDoubtStatus';
export { Profile } from './DataParameters/Enums/profile';
export { ShippingMethod } from './DataParameters/Enums/shippingMethod';
export { AromaSachet } from './DataParameters/Enums/aromaSachet';
export { CapsuleAroma } from './DataParameters/Enums/capsuleAroma';
export { OrderHasRecipe } from './DataParameters/Enums/orderHasRecipe';
export { PriorityRecipe } from 'DataParameters/Enums/priorityRecipe';