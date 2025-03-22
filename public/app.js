var contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "checkApprovalStatus",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
    {
        "inputs": [{ "internalType": "uint256", "name": "_projectId", "type": "uint256" }],
        "name": "allApprovalsReceived",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    },

{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "contribute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_goal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_durationInDays",
				"type": "uint256"
			}
		],
		"name": "createProject",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ContributionReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			}
		],
		"name": "ProjectCompleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "goal",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "ProjectCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "refund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RefundIssued",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "withdrawFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "contributions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getActiveProjects",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "getProject",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "platformOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "projectCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "projects",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "goal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fundsRaised",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isCompleted",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},

    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "approveProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_approver",
                "type": "address"
            }
        ],
        "name": "addApprover",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_approver",
                "type": "address"
            }
        ],
        "name": "removeApprover",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_count",
                "type": "uint256"
            }
        ],
        "name": "setRequiredApprovals",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getApprovers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }

];
var contractAddress = "0x24C1f26b0A5c479dD30A1e3b49aF35d951b8a0Da";

let web3; // Web3 instance
let contractInstance; // Contract instance
let currentAddress = null; // Current user's address
let isFirstAttempt = true; // Flag to track the first attempt to connect MetaMask

// Function to show loading indicator
function showLoadingIndicator() {
    document.getElementById('loading-indicator').style.display = 'block';
}

// Function to hide loading indicator
function hideLoadingIndicator() {
    document.getElementById('loading-indicator').style.display = 'none';
}

// Function to connect to MetaMask
async function connectMetamask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0 && currentAddress !== accounts[0]) { 
                currentAddress = accounts[0];
                console.log("Account connected: " + currentAddress);
                await login();
            await loadApprovers();
            }
        } catch (error) {
            if (!isFirstAttempt) {
                console.error('Error connecting to MetaMask:', error);
                showAlert('User denied account access or error occurred', 'danger');
            }
            isFirstAttempt = false;
        }
    } else {
        showAlert('Please install MetaMask to use this feature.', 'danger');
        console.error('MetaMask is not installed.');
    }
}

// Function to handle user login
async function login() {
    if (currentAddress) {
        showAlert('MetaMask connected successfully!', 'success');
        const connectButton = document.getElementById('connect-metamask');
        connectButton.innerText = `Connected: ${shortenHex(currentAddress)}`;
        connectButton.onclick = logout;
        console.log('Login successful', currentAddress);
        await loadProjects(); // Load projects after successful login
    }
}

// Function to handle user logout
async function logout() {
    currentAddress = null;
    showAlert('Logged out successfully.', 'info');
    const connectButton = document.getElementById('connect-metamask');
    connectButton.innerText = 'Connect Wallet';
    connectButton.onclick = connectMetamask;
    console.log('Logout successful');
}

// Function to display alerts
function showAlert(message, type = 'success') {
    const alertContainer = document.getElementById('alert-container');
    const alertElement = document.createElement('div');
    alertElement.className = `alert alert-${type} alert-dismissible fade show`;
    alertElement.role = 'alert';
    alertElement.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    alertContainer.appendChild(alertElement);

    // Automatically remove the alert after 5 seconds
    setTimeout(() => {
        alertElement.classList.remove('show');
        alertElement.addEventListener('transitionend', () => {
            alertElement.remove();
        });
    }, 5000);
}

// Helper function to shorten hexadecimal addresses
function shortenHex(hex) {
    return hex.slice(0, 6) + '...' + hex.slice(-4);
}

// Form validation function for creating projects
function validateProjectForm() {
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;
    const goal = document.getElementById("project-goal").value;
    const duration = document.getElementById("project-duration").value;

    if (!title || !description || !goal || !duration) {
        showAlert("Please fill in all fields!", 'warning');
        return false;
    }

    if (goal <= 0 || duration <= 0) {
        showAlert("Goal and duration must be positive numbers!", 'warning');
        return false;
    }

    return true;
}

// Function to create a new project
async function createProject() {
    if (!validateProjectForm()) return;

    showLoadingIndicator();
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;
    const goal = document.getElementById("project-goal").value;
    const duration = document.getElementById("project-duration").value;

    try {
        await contractInstance.methods
            .createProject(title, description, goal, duration)
            .send({ from: currentAddress });
        showAlert("Project created successfully!");
        await loadProjects(); // Refresh the project list
    } catch (error) {
        console.error("Error creating project:", error);
        showAlert(`Error creating project: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

// Function to contribute to a project
async function contribute() {
    const projectId = document.getElementById("project-id").value;
    const amount = document.getElementById("contribution-amount").value;

    if (!projectId || !amount || amount <= 0) {
        showAlert("Please enter a valid project ID and contribution amount!", 'warning');
        return;
    }

    showLoadingIndicator();
    try {
        await contractInstance.methods
            .contribute(projectId)
            .send({ from: currentAddress, value: amount });
        showAlert("Contribution successful!");
        await loadProjects(); // Refresh the project list
    } catch (error) {
        console.error("Error contributing to project:", error);
        showAlert(`Error contributing to project: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

// Function to set the project ID in the contribution form
function contributeTo(projectId) {
    document.getElementById('project-id').value = projectId;
    document.getElementById('contribution-amount').focus(); // Focus on the contribution amount field
}

// Function to withdraw funds from a project
async function withdrawFunds(projectId) {
    showLoadingIndicator();
    try {
        await contractInstance.methods.withdrawFunds(projectId).send({ from: currentAddress });
        showAlert("Funds withdrawn successfully!");
        await loadProjects(); // Refresh the project list
    } catch (error) {
        console.error("Error withdrawing funds:", error);
        showAlert(`Error withdrawing funds: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

// Function to request a refund for a project
async function refund(projectId) {
    showLoadingIndicator();
    try {
        await contractInstance.methods.refund(projectId).send({ from: currentAddress });
        showAlert("Refund successful!");
        await loadProjects(); // Refresh the project list
    } catch (error) {
        console.error("Error processing refund:", error);
        showAlert(`Error processing refund: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

// Function to load all projects
async function loadProjects() {
    showLoadingIndicator();
    try {
        const projectCount = await contractInstance.methods.projectCount().call();
        const projectsContainer = document.getElementById("projects");
        projectsContainer.innerHTML = ""; // Clear previous projects

        const approvers = (await contractInstance.methods.getApprovers().call()).map(addr => addr.toLowerCase());

        for (let i = 1; i <= projectCount; i++) {
            const project = await contractInstance.methods.getProject(i).call();
            const deadline = new Date(project[4] * 1000).toLocaleString();
            const isCompleted = project[6];
            const isExpired = new Date() > new Date(project[4] * 1000);
            const userIsOwner = currentAddress.toLowerCase() === project[0].toLowerCase();
            const fundsWithdrawn = project[5] === '0';

            let userContribution = 0;
            if (!userIsOwner) {
                userContribution = await contractInstance.methods.contributions(i, currentAddress).call();
            }

            const raisedAmount = isCompleted ? project[3] : project[5];

            let contributeElement = "";
            if (!isCompleted && !isExpired) {
                const isActive = await contractInstance.methods.checkApprovalStatus(i).call();
                if (isActive === "true") {
                    contributeElement = `<button class="btn btn-primary" onclick="contributeTo(${i})">Contribute</button>`;
                } else {
                    contributeElement = `<span class="badge bg-warning">Approvals Pending</span>`;
                }
            }

            const projectCard = `
                ${!isCompleted && approvers.includes(currentAddress.toLowerCase()) ? `<button class="btn btn-info" onclick="approveProject(${i})">Approve</button>` : ""}
                <div class="col-md-4">
                    <div class="project-card">
                        <h5>${project[1]} (Project ID: ${i})</h5>
                        <p>${project[2]}</p>
                        <p><strong>Goal:</strong> ${project[3]} wei</p>
                        <p><strong>Raised:</strong> ${raisedAmount} wei</p>
                        <p><strong>Deadline:</strong> ${deadline}</p>
                        ${contributeElement}
                        ${isCompleted ? '<span class="badge bg-success">Completed</span>' : ""}
                        ${!isCompleted && isExpired ? '<span class="badge bg-danger">Expired</span>' : ""}
                        ${!isCompleted && isExpired && userContribution > 0 ? `<button class="btn btn-warning" onclick="refund(${i})">Refund</button>` : ""}
                        ${isCompleted && userIsOwner && !fundsWithdrawn ? `<button class="btn btn-success" onclick="withdrawFunds(${i})">Withdraw</button>` : ""}
                    </div>
                </div>`;

            projectsContainer.innerHTML += projectCard;
        }
    } catch (error) {
        console.error("Error loading projects:", error);
        showAlert(`Error loading projects: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}


async function approveProject(projectId) {
    showLoadingIndicator();
    try {
        await contractInstance.methods.approveProject(projectId).send({ from: currentAddress });
        showAlert("Project approved!");
        await loadProjects();
    } catch (error) {
        console.error("Approval error:", error);
        showAlert(`Approval failed: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

async function addApprover() {
    const address = document.getElementById('new-approver-address').value;
    showLoadingIndicator();
    try {
        await contractInstance.methods.addApprover(address).send({ from: currentAddress });
        showAlert("Approver added!");
    } catch (error) {
        console.error("Add approver error:", error);
        showAlert(`Error adding approver: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

async function removeApprover() {
    const address = document.getElementById('remove-approver-address').value;
    showLoadingIndicator();
    try {
        await contractInstance.methods.removeApprover(address).send({ from: currentAddress });
        showAlert("Approver removed!");
    } catch (error) {
        console.error("Remove approver error:", error);
        showAlert(`Error removing approver: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

async function setRequiredApprovals() {
    const count = document.getElementById('required-approvals-count').value;
    showLoadingIndicator();
    try {
        await contractInstance.methods.setRequiredApprovals(count).send({ from: currentAddress });
        showAlert("Required approvals updated!");
    } catch (error) {
        console.error("Set required approvals error:", error);
        showAlert(`Error updating required approvals: ${error.message}`, 'danger');
    } finally {
        hideLoadingIndicator();
    }
}

async function loadApprovers() {
    try {
        const approvers = await contractInstance.methods.getApprovers().call();
        document.getElementById('approver-list').innerText = approvers.join('\n');
        if (approvers.map(a => a.toLowerCase()).includes(currentAddress.toLowerCase())) {
            document.getElementById('manage-approvals-section').style.display = 'block';
        } else {
            document.getElementById('manage-approvals-section').style.display = 'none';
        }

    } catch (error) {
        console.error("Failed to load approvers:", error);
    }
}

async function loadApprovers() {
    try {
        const approvers = await contractInstance.methods.getApprovers().call();
        const lowerCaseApprovers = approvers.map(a => a.toLowerCase());
        const isUserApprover = lowerCaseApprovers.includes(currentAddress.toLowerCase());

        // Show or hide the admin section
        const adminSection = document.getElementById('manage-approvals-section');
        adminSection.style.display = isUserApprover ? 'block' : 'none';

        // Also update the display list
        document.getElementById('approver-list').innerText = approvers.join('\n');
    } catch (error) {
        console.error("Failed to load approvers:", error);
    }
}

// Event listener for DOMContentLoaded to initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log("MetaMask is installed!");

        web3 = new Web3(window.ethereum);
        console.log("Web3 is loaded", web3);

        contractInstance = new web3.eth.Contract(contractABI, contractAddress);
        console.log("Contract is loaded", contractInstance);

        if (window.ethereum.isConnected()) {
            console.log("MetaMask is connected");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            currentAddress = accounts[0];
            await login();
            await loadApprovers();
        }

		// Event listener for account changes in MetaMask
        ethereum.on('accountsChanged', async function (accounts) {
            currentAddress = accounts[0];
            await login();
            await loadApprovers();
        });
    } else {
        alert('Please install Metamask');
    }
});

// Event listener for window load to connect MetaMask
window.onload = async () => {
    await connectMetamask();
};
