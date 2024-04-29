import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';
import { ResData } from './resData';

@Catch()
export class AllExceptionsFilter extends BaseRpcExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {  
      // console.log("exceptions: ",  exception.error);
      // console.log("exceptions: ",  exception);
      const ctx = host.switchToHttp();
      console.log("ctx");
      const respons = ctx.getResponse();
      console.log()
      
        if (!(exception instanceof RpcException)) {
          console.log("run");
          
            exception = new RpcException(exception.message);
        }
        const resData = new ResData(exception.message, exception.statusCode, null, exception);
        // exception.statusCode = resData.statusCode;
        return super.catch(exception, host);
    }
}
