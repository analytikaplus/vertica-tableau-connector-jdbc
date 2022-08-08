![vertica-connector-pic-png](https://user-images.githubusercontent.com/9002056/183481120-9930d04d-6b08-43f0-89b9-100e163d501e.png)

# Tableau connector to Vertica using JDBC driver

## What's it?
An extension for Tableau Desktop / Tableau Server that simplifies the process of connecting Tableau to Vertica

## What's the profit?
- In comparison with default Vertica connector: This connector uses a JDBC driver, which is faster than the ODBC driver in some cases (for example, creating Extracts), and is also much easier to install than ODBC (cross-platform jar file, uniform for all OS and CPU architectures, including Apple silicon)
- You can contribute to the development of the connector and improve its functionality, as well as explore the source code


## Before you install
- Make sure you...
  - use Tableau **2020.4+**
  
## How to install (Tableau Desktop)
1. Download the [Vertica JDBC Driver](https://www.vertica.com/download/vertica/client-drivers) and place the `vertica-jdbc-....jar` to:
    - macOS: `~/Library/Tableau/Drivers`
    - Windows: `C:\Program Files\Tableau\Drivers`
    - You need to create the folder if it doesn't already exist
2. Download the latest `vertica_jdbc_....taco` from the [Releases](https://github.com/analytikaplus/vertica-tableau-connector-jdbc/releases) page and place it to:
    - macOS: `~/Documents/My Tableau Repository/Connectors`
    - Windows: `C:\Users\[Windows User]\Documents\My Tableau Repository\Connectors`
3. Run Tableau Desktop
4. In Tableau Desktop: **Connect** ➔ **To a Server** ➔ **Vertica JDBC by ANALYTIKA PLUS**

## How to install (Tableau Prep Builder)
1. Download the [Vertica JDBC Driver](https://www.vertica.com/download/vertica/client-drivers) and place the `vertica-jdbc-....jar` to:
    - macOS: `~/Library/Tableau/Drivers`
    - Windows: `C:\Program Files\Tableau\Drivers`
    - You need to create the folder if it doesn't already exist
2. Download the latest `vertica_jdbc_....taco` from the [Releases](https://github.com/analytikaplus/vertica-tableau-connector-jdbc/releases) page and place it to:
    - macOS: `~/Documents/My Tableau Prep Repository/Connectors`
    - Windows: `C:\Users\[Windows User]\Documents\My Tableau Prep Repository\Connectors`
3. Run Tableau Prep Builder
4. In Tableau Prep Builder: **Connections** ➔ **+** ➔ **To a Server** ➔ **Vertica JDBC by ANALYTIKA PLUS**

## How to install (Tableau Server)
1. Download the [Vertica JDBC Driver](https://www.vertica.com/download/vertica/client-drivers) and place the `vertica-jdbc-....jar` to:
    - Linux: `/opt/tableau/tableau_driver/jdbc`
    - Windows: `C:\Program Files\Tableau\Drivers`
    - You need to create the directory if it doesn't already exist
    - *For Linux:* make sure directory is readable by the "tableau" user. To do this:
        - Create the directory:
            ```
            sudo mkdir -p /opt/tableau/tableau_driver/jdbc
            ```
        - Copy the downloaded driver file to the location, replacing `[/path/to/file]` with the path and `[driver file name]` with the name of the driver you downloaded:
            ```
            sudo cp [/path/to/file/][driver file name].jar /opt/tableau/tableau_driver/jdbc
            ```
        - Set permissions so the file is readable by the "tableau" user, replacing `[driver file name]` with the name of the driver you downloaded:
            ```
            sudo chmod 755 /opt/tableau/tableau_driver/jdbc/[driver file name].jar
            ```
2. Download the latest `vertica_jdbc_....taco` from the [Releases](https://github.com/analytikaplus/vertica-tableau-connector-jdbc/releases) page and place it into these folders on each node:
    - Linux: `/opt/tableau/connectors`
    - Windows: `C:\Program Files\Tableau\Connectors`
3. Restart the server.
    ```
    tsm restart
    ```
    - Note that whenever you add, remove, or update a connector, you need to restart the server to see the changes.