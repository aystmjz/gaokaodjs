On Error Resume Next   


Dim objWMIService,colProcessList,strComputer

Do
strComputer = "."
Set objWMIService = GetObject("winmgmts:{impersonationLevel=impersonate}!\\" & strComputer & "\root\cimv2")
Set colProcessList = objWMIService.ExecQuery("Select * from Win32_Process Where Name = 'wallpaper32.exe'")
If colProcessList.Count<=0 Then

set shell=CreateObject("Wscript.Shell")
shell.Run"""D:\wallpaper_engine\wallpaper32.exe"""

End If
Set colProcessList = Nothing
Set objWMIService = Nothing

wscript.sleep 1000

loop