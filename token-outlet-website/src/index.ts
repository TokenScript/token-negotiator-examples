import { Outlet } from '@tokenscript/token-negotiator';
import {updateTokenConfig} from "../../environment";
// @ts-ignore
import config from '../../tokenConfig.json';

let devconConfig = updateTokenConfig(config);

new Outlet(devconConfig);
