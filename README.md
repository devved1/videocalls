# videocalls
This reprosity contains the code for videochat app. I have already made a realtime chat app in my previous project but realtimechat app involves less difficult task compared to videochat.
Difficulties in videochat app compared to textchat:-
1) For textchat you can build server to exchange data bw clients which usually leads to delay of 2-5 seconds but this delay is very noticable for videochat app.
2) So basically we have to build such system that is able to transfer data without server interference.
So one simple solution is using WebRTC api calls that basically establishes connection between clients using combination of (ip+port) adress of client.
But 2 major problems that is faced by WebRTC are:
1) NAT 
2)FireWall
You can search these problems on google.So solving these problems we need to build STUN/TURN server for our WebRTI api.
