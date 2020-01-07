/* Copyright (C) 2019, 2020 Monomax Software Pty Ltd
 *
 * This file is part of Dnote.
 *
 * Dnote is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Dnote is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Dnote.  If not, see <https://www.gnu.org/licenses/>.
 */

export interface AuthState {
  sessionKey: string;
  sessionKeyExpiry: number;
}

export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';

export interface LoginAction {
  type: typeof LOGIN;
  data: {
    sessionKey: string;
    sessionKeyExpiry: number;
  };
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionType = LogoutAction | LoginAction;
