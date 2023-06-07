package com.example.xytj.Fabric;



import com.example.xytj.Fabric.bean.Chaincode;
import com.example.xytj.Fabric.bean.Orderers;
import com.example.xytj.Fabric.bean.Peers;
import org.apache.log4j.Logger;

import java.io.File;


public class FabricConfig {

    private static Logger log = Logger.getLogger(FabricConfig.class);

    /**
     * 节点服务器对象
     */
    private Peers peers;
    /**
     * 排序服务器对象
     */
    private Orderers orderers;
    /**
     * 智能合约对象
     */
    private Chaincode chaincode;
    /**
     * channel-artifacts所在路径：默认channel-artifacts所在路径/xxx/WEB-INF/classes/fabric/channel-artifacts/
     */
    private String channelArtifactsPath;
    /**
     * crypto-config所在路径：默认crypto-config所在路径/xxx/WEB-INF/classes/fabric/crypto-config/
     */
    private String cryptoConfigPath;
    private boolean registerEvent = false;

    public FabricConfig() {
        // 默认channel-artifacts所在路径 /xxx/WEB-INF/classes/fabric/channel-artifacts/
        channelArtifactsPath = getChannlePath() + "/channel-artifacts/";
        // 默认crypto-config所在路径 /xxx/WEB-INF/classes/fabric/crypto-config/
        cryptoConfigPath = getChannlePath() + "/crypto-config/";
    }

    /**
     * 默认fabric配置路径
     *
     * @return D:/installSoft/apache-tomcat-9.0.0.M21-02/webapps/xxx/WEB-INF/classes/fabric/channel-artifacts/
     */
    private String getChannlePath() {
//        String directorys = ChaincodeManager.class.getClassLoader().getResource("fabric").getFile();
        String directorys = "/home/xytj/jar/fabric";
        System.err.println("===============================");
        System.err.println(directorys);
        System.err.println("===============================");
        log.debug("directorys = " + directorys);
        File directory = new File(directorys);
        log.debug("directory = " + directory.getPath());

        return directory.getPath();
//        return "src/main/resources/fabric/channel-artifacts/";
    }

    public Peers getPeers() {
        return peers;
    }

    public void setPeers(Peers peers) {
        this.peers = peers;
    }

    public Orderers getOrderers() {
        return orderers;
    }

    public void setOrderers(Orderers orderers) {
        this.orderers = orderers;
    }

    public Chaincode getChaincode() {
        return chaincode;
    }

    public void setChaincode(Chaincode chaincode) {
        this.chaincode = chaincode;
    }

    public String getChannelArtifactsPath() {
        return channelArtifactsPath;
    }

    public void setChannelArtifactsPath(String channelArtifactsPath) {
        this.channelArtifactsPath = channelArtifactsPath;
    }

    public String getCryptoConfigPath() {
        return cryptoConfigPath;
    }

    public void setCryptoConfigPath(String cryptoConfigPath) {
        this.cryptoConfigPath = cryptoConfigPath;
    }

    public boolean isRegisterEvent() {
        return registerEvent;
    }

    public void setRegisterEvent(boolean registerEvent) {
        this.registerEvent = registerEvent;
    }

}
