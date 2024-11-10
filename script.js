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
            botMessage.textContent = 'Use strong passwords that include a mix of letters, numbers, and symbols. Securing your password is crucial for protecting your accounts. Here are some essential tips to ensure your passwords are strong and secure:1. **Use a Strong Password**: Combine uppercase and lowercase letters, numbers, and symbols. Avoid common words or easily guessable information like your name or birthday.2. **Avoid Reusing Passwords**: Each account should have a unique password. This way, if one account is compromised, others remain safe.3. **Enable Two-Factor Authentication (2FA)**: Most services offer 2FA, adding an extra security layer by requiring a secondary verification step (e.g., a code sent to your phone).4. **Use a Password Manager**: Password managers like LastPass, Dashlane, or Bitwarden can securely store and generate complex passwords, making it easier to use unique passwords for every account.5. **Beware of Phishing Scams**: Don’t click on suspicious links or enter your password on unfamiliar websites. Phishing attacks often try to trick you into revealing your password.6. **Update Passwords Regularly**: Periodically changing your passwords reduces the risk of long-term exposure if your password is compromised.7. **Avoid Storing Passwords in Plain Text**: Do not store passwords in unencrypted files or on paper. Use secure apps or password managers to store them safely.Would you like more information on any specific password security tool or practice?';
        } else if (input.toLowerCase().includes('phishing')) {
            botMessage.textContent = 'Phishing is a type of cyber attack that uses disguised emails to trick you into revealing personal information.Phishing is a type of cyber-attack where attackers attempt to deceive individuals into sharing sensitive information, such as passwords, credit card numbers, or personal details. These attacks are often executed through fake emails, messages, websites, or phone calls designed to look legitimate, usually by mimicking trusted organizations, services, or individuals. Here’s a closer look at how phishing works, its types, and how to protect yourself against it:1. **How Phishing Works**- Attackers send a message or create a website that appears to be from a trustworthy source (e.g., banks, popular online platforms, colleagues).- The message often contains a sense of urgency (e.g., “Your account will be locked!”) to pressure the victim into acting quickly.- The victim is directed to click on a link or open an attachment, leading to a fake login page or malware installation.- If the victim provides credentials or sensitive information, attackers capture it, potentially leading to unauthorized access to accounts or financial loss.2. **Types of Phishing**- **Email Phishing**: The most common type, where attackers send fake emails to many people, pretending to be a trusted source.- **Spear Phishing**: A targeted attack directed at a specific individual or organization. Attackers often research their target to make the message more convincing.- **Whaling**: Phishing attacks aimed at high-profile individuals like executives. These messages are highly personalized and often play on the person’s professional role.- **Smishing**: Phishing carried out through SMS (text messages). Attackers send texts containing malicious links or urgent requests.- **Vishing**: Phishing over the phone (voice phishing), where attackers pose as legitimate entities, such as a bank, asking for personal or financial information.- **Clone Phishing**: Attackers create a near-identical copy of a legitimate email previously sent by a trusted source, altering links or attachments to malicious ones.- **Website Phishing**: Fake websites designed to look identical to real ones. These sites capture login credentials or personal information.3. **How to Recognize Phishing Attacks**- **Suspicious Sender**: Emails from addresses that look almost correct but contain small alterations (e.g., info@secure-google.com instead of info@google.com). - **Urgency and Threats**: Messages that demand immediate action or threaten consequences if you don’t respond (e.g., “Act now to avoid account suspension”).- **Generic Greetings**: Legitimate organizations often address you by name, whereas phishing emails may use general terms like “Dear Customer.”- **Spelling and Grammar Errors**: Many phishing emails contain typos or unusual grammar, as they’re often sent in bulk from overseas.- **Unexpected Attachments or Links**: Be wary of unsolicited links or attachments. Hover over links to see if the URL matches the claimed website. - **Request for Sensitive Information**: Legitimate companies rarely ask for sensitive information like passwords or bank details over email.4. **Protection Against Phishing**- **Verify the Source**: If an email or message asks for sensitive information, verify its authenticity by contacting the organization directly using their official contact information.- **Hover Before Clicking**: Hover over links to see the actual URL before clicking. Be cautious if it looks suspicious or unfamiliar.- **Use Anti-Phishing Toolbars**: Many browsers offer toolbars or extensions that can help identify known phishing websites.- **Install Security Software**: Good antivirus and anti-malware software can block malicious links and protect against phishing.- **Keep Software Updated**: Regularly update your operating system, browsers, and apps to patch any security vulnerabilities.- **Educate Yourself and Others**: Awareness is one of the most powerful defenses against phishing. Knowing what to look for helps you avoid falling for phishing attempts.5. **What to Do If You Fall for Phishing**- **Change Your Passwords**: If you suspect that a phishing attack compromised your credentials, immediately change your passwords.- **Enable Two-Factor Authentication (2FA)**: For compromised accounts, enable 2FA to add an extra layer of security. - **Report the Attack**: Report phishing emails to your email provider, and notify any relevant organization (like your bank).  - **Monitor Your Accounts**: Keep an eye on financial or sensitive accounts for suspicious activity.Understanding phishing and staying vigilant can help prevent these attacks from succeeding. Security awareness and caution with unexpected messages or emails are key to staying safe.';
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
        } else if (input.toLowerCase().includes('botnet')) {
            botMessage.textContent = 'A botnet is a collection of internet-connected devices infected by malware that allow attackers to control them as a group.';
        } else if (input.toLowerCase().includes('ddos')) {
            botMessage.textContent = 'A DDoS (Distributed Denial-of-Service) attack overwhelms a network or service with traffic to disrupt its normal operations.';
        } else if (input.toLowerCase().includes('password manager')) {
            botMessage.textContent = 'A password manager helps you generate and store strong, unique passwords for all your accounts in one secure place.';
        } else if (input.toLowerCase().includes('dark web')) {
            botMessage.textContent = 'The Dark Web is a part of the internet that is not indexed by traditional search engines and often used for illicit activities.';
        } else if (input.toLowerCase().includes('zero-day')) {
            botMessage.textContent = 'A zero-day vulnerability refers to a flaw in software that is unknown to the vendor and can be exploited by hackers before a fix is available.';
        } else if (input.toLowerCase().includes('patch')) {
            botMessage.textContent = 'A patch is a piece of software designed to update a computer program or its supporting data to fix or improve it, including fixing security vulnerabilities.';
        } else if (input.toLowerCase().includes('identity theft')) {
            botMessage.textContent = 'Identity theft occurs when someone steals your personal information to commit fraud, such as making purchases or opening accounts in your name.';
        } else if (input.toLowerCase().includes('whaling')) {
            botMessage.textContent = 'Whaling is a specific kind of phishing attack that targets high-profile individuals, such as executives, in an organization.';
        } else if (input.toLowerCase().includes('brute force')) {
            botMessage.textContent = 'A brute-force attack is a trial-and-error method used to decode encrypted data, such as passwords, by trying all possible combinations.';
        } else if (input.toLowerCase().includes('security awareness training')) {
            botMessage.textContent = 'Security awareness training educates employees and individuals on best practices to protect themselves and their organization from cyber threats.';
        } else {
            botMessage.textContent = 'Sorry, I don\'t understand that question. Please ask something else.';
        }

        messages.appendChild(botMessage);
        messages.scrollTop = messages.scrollHeight;
    }
});
