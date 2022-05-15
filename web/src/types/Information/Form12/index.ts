import { hearingLocationsInfoType } from "@/types/Common";
import { partyInfoType } from "../Form3";
import { applicantJsonDataType, respondentsJsonDataType } from "../json"


export interface form12FormsJsonDataType {
    id: number;
    personId: number;
    type: string;
    status: string;
    modified: string;
    archive: boolean;
    packageUrl?: string;
    packageNumber?: string;
    pdf_types: string;
    data: form12DataInfoType;
    description: string;
}

export interface orderInfoDataType {
    AppealFrom?: string;
    BoardTribunalName?: string;
    Charge?: string;
    ConvictionAcquittalDate?: string;
    FileNumber?: string;
    JudgeFirstName?: string;
    JudgeLastName?: string;
    JudgeSalutation?: string;
    JudgmentDate?: string;
    Jury?: boolean;
    Level?: string;
    Location?: string;
    LocationID?: number;
    Sentence?: string;
    SentenceDate?: string;
    JudgeFullName?: string;
}

export interface form12StatusInfoType {
    first?: boolean;
    second?: boolean;
    third?: boolean;
    thirdError?: boolean;
}

export interface form12SearchInfoType {
    file: string;
    lastName: string;
    firstName: string;
    organizationName?: string;
    searchBy: string;
}

export interface form12DataInfoType {
    formSevenNumber:string;
    appellants: applicantJsonDataType[];
    respondents: respondentsJsonDataType[];
    requiresManualEntry: boolean;
    appellantsInfo: partyInfoType[];
    respondentsInfo: partyInfoType[];
    appellantNames: string;
    respondentNames: string;
    judgeNames: string[]; 
    hearingLocation: hearingLocationsInfoType;   
    dateOfJudgement: string;
    applyingParties: string[]; 
    varyingOrderJudgeName: string;
    varyingOrderDate: string;
    filingParties: string[];
    appearingParties: string[];
    orderAllowed: boolean;
    otherOrders: boolean;
    furtherOrders?: string;
    authorizedName: string;
    completionDate?: string;
    version?: string;
}
