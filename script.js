document.addEventListener('DOMContentLoaded', function() {
    const blockTableBody = document.getElementById('blockTableBody');
    const transactionTableBody = document.getElementById('transactionTableBody');

    // Example data to be replaced with actual data fetching logic
    const blocks = [
        { number: 123456, timestamp: '2024-05-17 12:00:00', transactions: 50, miner: '0xMiner1', gasUsed: 1500000 },
        { number: 123455, timestamp: '2024-05-17 11:50:00', transactions: 60, miner: '0xMiner2', gasUsed: 1400000 },
        { number: 123454, timestamp: '2024-05-17 11:40:00', transactions: 40, miner: '0xMiner3', gasUsed: 1300000 },
    ];

    const transactions = [
        { hash: '0x1234567890abcdef', blockNumber: 123456, from: '0xFromAddress1', to: '0xToAddress1', value: '1.5 ETH' },
        { hash: '0xabcdef1234567890', blockNumber: 123455, from: '0xFromAddress2', to: '0xToAddress2', value: '0.8 ETH' },
        { hash: '0x7890abcdef123456', blockNumber: 123454, from: '0xFromAddress3', to: '0xToAddress3', value: '2.0 ETH' },
    ];

    blocks.forEach(block => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${block.number}</td>
            <td>${block.timestamp}</td>
            <td>${block.transactions}</td>
            <td>${block.miner}</td>
            <td>${block.gasUsed}</td>
        `;
        blockTableBody.appendChild(row);
    });

    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.hash}</td>
            <td>${transaction.blockNumber}</td>
            <td>${transaction.from}</td>
            <td>${transaction.to}</td>
            <td>${transaction.value}</td>
        `;
        transactionTableBody.appendChild(row);
    });
});
