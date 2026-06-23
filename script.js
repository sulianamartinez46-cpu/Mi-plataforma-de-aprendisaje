*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Segoe UI', Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card{
    background: white;
    padding: 50px 40px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    text-align: center;
    max-width: 400px;
    width: 90%;
}

h1{
    color: #667eea;
    margin-bottom: 15px;
    font-size: 28px;
}

p{
    color: #666;
    margin: 10px 0 25px;
}

input{
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: border 0.3s;
}

input:focus{
    outline: none;
    border-color: #667eea;
}

button{
    width: 100%;
    padding: 12px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    margin-top: 15px;
    transition: background 0.3s;
}

button:hover{
    background: #5568d3;
}

.ok{
    background: #d1fae5;
    color: #065f46;
    padding: 10px;
    border-radius: 8px;
    margin-top: 15px;
}

.badge{
    background: #4ade80;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    display: inline-block;
    margin-top: 20px;
    font-weight: bold;
    font-size: 14px;
}
