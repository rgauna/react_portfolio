import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>


            <h2 style={{paddingTop: '2em'}}>Rudy Gauna</h2>
            <h4 style={{color: 'grey'}}>Storage Area Network Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>I am a senior level storage engineer with over 12 years of experience in large enterprise I.T. environments supporting thousands of end-user clients. I am highly experienced in storage provisioning, troubleshooting, performance tuning, local/remote replication for disaster recovery, and root-cause analyses. My primary focus is
to provide outstanding proactive and reactive service to maximize system and application up-time.
</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2004}
              endYear={2005}
              schoolName="New Horizons Computer Learning Center"
              schoolDescription="Computer Technology/Computer Systems Technology"
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName="UTSA / Trilogy"
                 schoolDescription="Full Stack Web Development"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2016}
              endYear={"Present"}
              jobName="Virtustream"
              jobDescription="I am currently a Sr. Advisor in IT storage Infrastructure for this IaaS cloud provider comprised of EMC (Unity, VNX, VNXe, VPLEX, VMAX, RecoverPoint, ViPR SRM) and Cisco (UCS , MDS, Nexus) technologies.My responsibilities include but aren't limited to: end-to-end troubleshooting of hosts/storage connectivity, architectural design, new system deployment, replication (block and file) configuration for business continuity, as well as project leadership & management."
              />

              <Experience
                startYear={2016}
                endYear={2016}
                jobName="Tesoro Corporation"
                jobDescription="I was a senior storage engineer on a purely contractor basis for staff augmentation for a major company project. I was working on Hitatchi (VSP, AMS2500, USPVM, HUS150), NetApp(FAS 8040), and Cisco (MDS) storage and fabric technologies. My responsibilities included but were not limited to: Storage provisioning to hosts, performance tuning, zoning, local and remote replication (block and file), troubleshooting SAN/storage related issues, and engage in proactive & reactive work."
                />
              <Experience
                startYear={2015}
                endYear={2016}
                jobName="Rackspace"
                jobDescription="I was a virtualization (VMware) engineer for a managed cloud company. I was part of a team that managed an extremely large enterprise virtualized environment within an ESXi 5.x vSphere environment. My responsibilities included but weren’t limited to: Hypervisor deployment/configuration & management (Dell and HP hardware), VM deployments/configuration and management, replication management (SRM, Double-Take, and vRanger), P2V conversions, performance tuning, and other administrative duties.
                "
                />
              <Experience
                startYear={2011}
                endYear={2015}
                jobName="Rackspace"
                jobDescription="I was a storage area network (SAN) engineer for a managed cloud company. I was part of a team that managed and maintained the following SAN hardware: ALL EMC VNX 1 and 2 (block and file/unified), Symmetrix VMAX 40K series arrays, Brocade 6505/6510/6520/DCX 8510 switches/ directors, Brocade HBAs, and EMC RecoverPoint appliances on Gen5 hardware running RecoverPoint 4.1. My roles and responsibilities
                include but were not limited to: LUN provisioning/reclamation to host OS’s (Windows 28K R2, RHEL 6.6,ESX 5.5), host zoning, end to end connectivity troubleshooting, performance analysis (arrays and switches), proactive
                review of SAN environment, scheduling/planning deployment of SAN gear, training of new hires, onsite deployment of SAN gear, data migrations (MirrorView,OpenReplicator,RecoverPoint), presales design for medium to large environments, and SAN hardware upgrades/installations."
                />
                <Experience
                startYear={2010}
                endYear={2010}
                jobName="Tesoro Corporation"
                jobDescription="I was a storage area network (SAN) engineer in this company’s I.T. department. I was the main administrator of the following SAN hardware: Hitachi USPV/2500 AMS, Hitachi HNAS, Hitachi HCAP series arrays, and Cisco MDS switches. My roles and responsibilities included but weren’t limited to: LUN provisioning, BCV (business continuance volume) creation for local protection, file system creation, internal data migrations, client backup setup/ configuration (EMC Networker), and fabric administration."
                />
                <Experience
                startYear={2008}
                endYear={2010}
                jobName="Security Service Federal Credit Union"
                jobDescription="I was the lead SAN administrator and general all-around systems admin primarily in a Windows environment. I administered the SAN infrastructure
                that comprised the following hardware: EMC CX3-80, EMC Celerra NS40, IBM DS8100, IBM SVC (SAN volume controller) Brocade/McData fabric (6140s and DCX9), Sepaton VTL used w/ IBM TSM, and provided remote support for our individual branches. My duties included but weren’t limited to: LUN provisioning to hosts, SAN hardware upgrades/replacements/refreshes,
                local and remote replication, system backups, server hardware upgrades/ replacements/refreshes, user account administration, and annual disaster recovery scenarios."
                />
                <Experience
                startYear={2006}
                endYear={2008}
                jobName="DellEMC"
                jobDescription="I was an implementation specialist for this company on an on-site traveling implementation team. The hardware products I primarily worked on were: EMC Centera and EMC CLariion Disk Library. My duties included but weren’t limited to: Pre-implementation design with the customer, Visio/document creation, onsite implementation of the hardware/software, and knowledge transfers with the customer on the technology and  administration."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                      skill="EMC Storage Technologies"
                      progress={85}
                      />
              <Skills
                      skill="Hitachi Storage Technologies"
                      progress={60}
                      />
              <Skills
                      skill="IBM Storage Technologies"
                      progress={45}
                      />
              <Skills
                      skill="Cisco SAN"
                      progress={70}
                      />
              <Skills
                      skill="Brocade SAN"
                      progress={60}
                      />
              <Skills
                      skill="VMware Administration"
                      progress={60}
                      />
              <Skills
                skill="javascript"
                progress={20}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={20}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={20}
                    />
                    <Skills
                      skill="React"
                      progress={20}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;