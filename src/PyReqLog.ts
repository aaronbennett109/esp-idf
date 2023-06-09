// Copyright 2019 Espressif Systems (Shanghai) CO LTD
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export class PyReqLog {
  private logListener: Function;
  private log: string;
  constructor(logListener: Function) {
    this.log = "";
    this.logListener = logListener;
  }
  set Log(val) {
    this.log += val;
    this.logListener(this.log);
  }
  get Log() {
    return this.log;
  }
}
