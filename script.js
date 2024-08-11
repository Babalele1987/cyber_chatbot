// script.js
document.getElementById('chatbot-send').addEventListener('click', function() {
    let input = document.getElementById('chatbot-input').value;
    let messages = document.getElementById('chatbot-messages');

    if (input.trim() !== "") {
        let userMessage = document.createElement('div');
        userMessage.textContent = input;
        userMessage.className = 'user-message';
        messages.appendChild(userMessage);

        document.getElementById('chatbot-input').value = '';

        let botMessage = document.createElement('div');
        botMessage.className = 'bot-message';

        // Simple bot responses
        if (input.toLowerCase().includes('password')) {
            botMessage.textContent = 'Use strong passwords that include a mix of letters, numbers, and symbols.';
        } else if (input.toLowerCase().includes('phishing')) {
            botMessage.textContent = 'Phishing is a type of cyber attack that uses disguised emails to trick you into revealing personal information.';
        } else if (input.toLowerCase().includes('malware')) {
            botMessage.textContent = 'Malware is software designed to harm or exploit any programmable device, service, or network.';
        } else if (input.toLowerCase().includes('firewall')) {
            botMessage.textContent = 'A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization\'s previously established security policies.';
        } else if (input.toLowerCase().includes('vpn')) {
            botMessage.textContent = 'A VPN, or Virtual Private Network, extends a private network across a public network and enables users to send and receive data as if their devices were directly connected to the private network.';
        } else if (input.toLowerCase().includes('two-factor')) {
            botMessage.textContent = 'Two-factor authentication (2FA) adds an extra layer of security to your online accounts by requiring two types of information before granting access.';
        } else if (input.toLowerCase().includes('encryption')) {
            botMessage.textContent = 'Encryption is the process of converting information or data into a code to prevent unauthorized access.';
        } else if (input.toLowerCase().includes('ransomware')) {
            botMessage.textContent = 'Ransomware is a type of malware that threatens to publish the victim\'s data or block access to it unless a ransom is paid.';
        } else if (input.toLowerCase().includes('virus')) {
            botMessage.textContent = 'A computer virus is a type of malicious software that, when executed, replicates by inserting copies of itself into other computer programs, data files, or the boot sector of the hard drive.';
        } else if (input.toLowerCase().includes('spyware')) {
            botMessage.textContent = 'Spyware is software that enables a user to obtain covert information about another\'s computer activities by transmitting data covertly from their hard drive.';
        } else if (input.toLowerCase().includes('social engineering')) {
            botMessage.textContent = 'Social engineering is the psychological manipulation of people into performing actions or divulging confidential information.';
        } else if (input.toLowerCase().includes('data breach')) {
            botMessage.textContent = 'A data breach is an incident where information is stolen or taken from a system without the knowledge or authorization of the system\'s owner.';
        } else if (input.toLowerCase().includes('anti-virus')) {
            botMessage.textContent = 'Anti-virus software is designed to detect, prevent, and remove malware, including viruses, worms, and trojans.';
        } else if (input.toLowerCase().includes('update')) {
            botMessage.textContent = 'Regularly update your software to protect against the latest security vulnerabilities.';
        } else if (input.toLowerCase().includes('backup')) {
            botMessage.textContent = 'Regularly back up your data to protect against data loss due to malware, hardware failure, or other issues.';
        } else if (input.toLowerCase().includes('public wifi')) {
            botMessage.textContent = 'Be cautious when using public Wi-Fi networks, as they can be insecure and expose your data to potential attackers.';
        } else {
            botMessage.textContent = 'Sorry, I don\'t understand that question. Please ask something else.';
        }

        messages.appendChild(botMessage);
        messages.scrollTop = messages.scrollHeight;
    }
});
