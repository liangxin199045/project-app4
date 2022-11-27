/* eslint-disable @typescript-eslint/ban-types */
import { api, APIPromise } from 'framework';
import { statusResponse, AcRequest, SingleRequest } from './types';

const commonRequest = {
  get: (str: string)=>{
    console.log(2222);
  }
}

export function getUserInfo(data: AcRequest): APIPromise<statusResponse> {
  return commonRequest.get('account/get_binding_requests/');
}

export function unbindInfo(data: SingleRequest): APIPromise<{}> {
  return commonRequest.get('account/unbind_account/');
}
