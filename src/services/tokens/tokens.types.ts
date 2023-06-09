import { Teachers } from 'src/entity/primary_entities/staff/teachers/teachers.model';
import { Students } from 'src/entity/primary_entities/students/students.models';
import { Bursars } from 'src/entity/primary_entities/staff/bursary/busary.model';

/** Note: Al type defs for Primary entities and Auth systems
    are defined in this file! */

/* tokens type def. */
type Permissions = {
  read: boolean;
  write: boolean;
};

export interface TokensSuccess {
  ok: boolean;
  code: number;
  metadata: {
    data:
      | string
      | {
          accessToken: string;
          refreshToken?: string | undefined;
        };
  };
}

export interface IToken {
  role: string;
  token: string;
  tokenEmail: string;
  tokenPermissions: Permissions | any;
}

/* users type def. */
export type Users = Students | Teachers | Bursars;
