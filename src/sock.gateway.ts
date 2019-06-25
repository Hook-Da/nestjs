import { SubscribeMessage, 
		 WebSocketGateway, 
		 OnGatewayInit, 
		 WsResponse, 
		 WebSocketServer, 
		 OnGatewayConnection,
		 OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class SockGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{

	@WebSocketServer() wss: Server;

	private logger: Logger = new Logger('SockGateway');

	afterInit(server: Server){
		this.logger.log('Initialized!');
	}

	handleDisconnect(client: Socket){
		this.logger.log(`Client disconnected! Client id - ${client.id}`);
	}

	handleConnection(client: Socket){
		this.logger.log(`Client connected to server! Client id - ${client.id}`);
	}
  @SubscribeMessage('messageToServer')
  handleMessage(client: Socket, text: string): WsResponse<string> /*void*/ {//если мы хотим отправить сообщение всем, то метод должен ничего не возращать и добавить декоратор выше @WebSocketServer() wss: Server;
	  this.logger.log('Client made a message!');
	  this.wss.emit('typing', 'Hello world!');// это сообщение получат все пользователи.
    //client.emit('msgToClient',text);
	  return { event:'typing',data: 'Hello world!'};//так сообщение отправится только тому кто запустил событие
  }
}
