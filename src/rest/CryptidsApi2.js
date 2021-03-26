
const CRYPTIDS_ENDPOINT = 'https://crudcrud.com/api/9808c8e15bf34de8bf4c2c652aa1133c/cryptids';

class CryptidService {
    getAll = async() => {
        try {
            const resp = await fetch(CRYPTIDS_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error(`Problem fetching cryptids: ${e}`);
        }
    }
    update = async(cryptid) => {
        try {
            let updatedWithoutId = {
                name: cryptid.name,
                description: cryptid.description,
                otherName: cryptid.otherName,
                lastSeen: cryptid.lastSeen
            }
            const resp = await fetch(`${CRYPTIDS_ENDPOINT}/${cryptid._id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId)
            });
            return resp;
        } catch(e) {
            console.error(`Problem updating cryptid: ${e}`);
        }
    }

    create = async(cryptid) => {
        try {
            const resp = await fetch(`${CRYPTIDS_ENDPOINT}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(cryptid)
            });
            return resp;
        } catch(e) {
            console.error(`Problem creating cryptid: ${e}`);
        }
    }

    delete = async(id) => {
        try {
            const resp = await fetch(`${CRYPTIDS_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.error(`Problem deleting cryptide:${e}`);
        }
    }
}

export const cryptidService = new CryptidService();