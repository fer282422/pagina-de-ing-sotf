Sub GetPrediction()
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    http.Open "POST", "https://api.mi_modelo_de_ia.com/predict", False
    http.SetRequestHeader "Content-Type", "application/json"
    
    Dim json As String
    json = "{""monto"": 100, ""edad"": 30}"
    
    http.Send json
    
    MsgBox http.responseText
End Sub
