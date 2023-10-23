(function() {
    const ctx = document.getElementById('tokenomics-chart').getContext('2d');
  
    const data = {
      labels: [
        'Airdrop for Odyssey NFT holders (50%)',
        'Stake & Rewards (20%)',
        'Public Sale (10%)',
        'Team (10%)',
        'Liquidity (5%)',
        'Listing on Exchanges (3%)',
        'Drops of Chance (2%)'
      ],
      datasets: [
        {
          data: [50, 20, 10, 10, 5, 3, 2],
          backgroundColor: [
            'rgba(62, 74, 195, 0.8)',
            'rgba(81, 92, 205, 0.8)',
            'rgba(101, 110, 215, 0.8)',
            'rgba(120, 127, 224, 0.8)',
            'rgba(139, 144, 233, 0.8)',
            'rgba(159, 162, 243, 0.8)',
            'rgba(178, 180, 252, 0.8)'
          ],
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 0, 
      plugins: {
        datalabels: {
          display: true, 
        },
      },
    };
  
    const tokenomicsChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options,
    });
  })();
  