import React, { useState } from 'react';
import { Box, Card, Typography, TextField, Button } from '@mui/material';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const pesoFormatado = parseFloat(peso.replace(',', '.'));
    const alturaFormatada = parseFloat(altura.replace(',', '.'));

    if (!pesoFormatado || !alturaFormatada) {
      setImc('');
      setClassificacao('');
      return;
    }

    const valorIMC = pesoFormatado / (alturaFormatada * alturaFormatada);
    setImc(valorIMC.toFixed(1));

    let classificacaoTexto = '';
    if (valorIMC < 18.5) classificacaoTexto = 'Abaixo do peso';
    else if (valorIMC < 25) classificacaoTexto = 'Peso normal';
    else if (valorIMC < 30) classificacaoTexto = 'Sobrepeso';
    else classificacaoTexto = 'Obesidade';

    setClassificacao(classificacaoTexto);
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#ffffff"
    >
      <Card
        sx={{
          width: '90%',
          maxWidth: 360,
          p: 3,
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        {/* Título */}
        <Typography variant="h6" align="center" mb={2}>
          📟 Simulador de IMC
        </Typography>

        {/* Entradas */}
        <TextField
          label="Peso (kg)"
          variant="outlined"
          fullWidth
          margin="dense"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <TextField
          label="Altura (m)"
          variant="outlined"
          fullWidth
          margin="dense"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        {/* Botão */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: '#1976d2' }}
          onClick={calcularIMC}
        >
          Calcular IMC
        </Button>

        {/* Resultado */}
        {imc && (
          <Box mt={3}>
            <Typography variant="body2">
              Seu IMC é {imc}
            </Typography>
            <Typography variant="body2">
              Classificação: {classificacao}
            </Typography>
          </Box>
        )}
      </Card>
    </Box>
  );
}